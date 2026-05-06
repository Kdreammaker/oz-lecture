import { useState, useEffect } from 'react';
import { db } from './firebase';
import { 
  collection, 
  addDoc, 
  onSnapshot, 
  query, 
  orderBy, 
  serverTimestamp,
  deleteDoc,
  updateDoc,
  doc 
} from 'firebase/firestore';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [nickname, setNickname] = useState('');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);

  // 수정 관련 상태
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  // 1. 실시간 데이터 불러오기
  useEffect(() => {
    const q = query(collection(db, "guestbook"), orderBy("createdAt", "desc"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(msgData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // 2. 메시지 추가하기
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nickname.trim() || !text.trim()) {
      alert("닉네임과 내용을 모두 입력해주세요!");
      return;
    }

    try {
      await addDoc(collection(db, "guestbook"), {
        nickname: nickname,
        content: text,
        createdAt: serverTimestamp()
      });
      setText('');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  // 3. 메시지 삭제하기
  const handleDelete = async (id) => {
    if (!window.confirm("정말 이 메시지를 삭제하시겠습니까?")) return;
    try {
      await deleteDoc(doc(db, "guestbook", id));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  // 4. 메시지 수정 모드 진입
  const startEdit = (msg) => {
    setEditingId(msg.id);
    setEditingText(msg.content);
  };

  // 5. 메시지 수정 완료
  const handleUpdate = async (id) => {
    if (!editingText.trim()) return;
    try {
      await updateDoc(doc(db, "guestbook", id), {
        content: editingText
      });
      setEditingId(null);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  return (
    <div className="app-container">
      <h1>Real-time Guestbook</h1>
      
      <form className="input-section" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nickname" 
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <textarea 
          placeholder="Leave a message..." 
          rows="3"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button type="submit">Post Message</button>
      </form>

      <div className="guestbook-list">
        {loading ? (
          <div className="empty-state">Loading messages...</div>
        ) : messages.length === 0 ? (
          <div className="empty-state">No messages yet. Be the first to write!</div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="message-card">
              <div className="message-header">
                <span className="nickname">@{msg.nickname}</span>
                <div className="header-right">
                  <span className="date">
                    {msg.createdAt?.toDate().toLocaleString('ko-KR', {
                      month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                    }) || "Just now"}
                  </span>
                  <div className="actions">
                    <button className="action-btn edit" onClick={() => startEdit(msg)}>✏️</button>
                    <button className="action-btn delete" onClick={() => handleDelete(msg.id)}>🗑️</button>
                  </div>
                </div>
              </div>

              {editingId === msg.id ? (
                <div className="edit-container">
                  <textarea 
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    className="edit-textarea"
                  />
                  <div className="edit-actions">
                    <button onClick={() => handleUpdate(msg.id)} className="save-btn">Save</button>
                    <button onClick={() => setEditingId(null)} className="cancel-btn">Cancel</button>
                  </div>
                </div>
              ) : (
                <div className="content">{msg.content}</div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
