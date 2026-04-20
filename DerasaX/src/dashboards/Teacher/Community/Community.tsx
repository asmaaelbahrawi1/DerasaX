import React, { useState, useEffect } from "react";
import NavTeacher from "../NavTeacher/NavTeacher";
import FooterTeacher from "../FooterTeacher/FooterTeacher";
import Logo from "../../../assets/images/community.png";
import Like from "../../../assets/icons/like.png";
import comment from "../../../assets/icons/comment.png"
import "./Community.css";

interface Comment {
  text: string;
  isLiked?: boolean;
}

interface Post {
  id: number;
  author: string;
  title: string;
  content: string;
  likes: number;
  views: number;
  date: string;
  isLiked?: boolean;
  isPinned?: boolean;
  comments: Comment[];
  showComments?: boolean;
}

// ✅ بيانات وهمية
const defaultPosts: Post[] = [
  {
    id: 1,
    author: "Nada Ashraf",
    title: "Alternative Method for Solving Quadratic Equations",
    content: "I discovered a different approach to factoring quadratics that works really well for me. Instead of using the standard method, I use the box method. Has anyone else tried this?",
    likes: 12,
    views: 54,
    date: "Thu, Nov 28, 10:30 AM",
    isLiked: false,
    isPinned: true,
    comments: [
      { text: "Nice explanation 🔥", isLiked: false },
      { text: "شرح جميل جدًا 👏", isLiked: true },
    ],
    showComments: false,
  },
  {
    id: 2,
    author: "Malak Mohamed",
    title: "Best Way to Study React",
    content: "I discovered a different approach to factoring quadratics that works really well for me. Instead of using the standard method, I use the box method. Has anyone else tried this?",
    likes: 8,
    views: 33,
    date: "Fri, Nov 29, 2:00 PM",
    isLiked: false,
    isPinned: false,
    comments: [
      { text: "Totally agree 👌", isLiked: false },
    ],
    showComments: false,
  },
  {
    id: 3,
    author: "Asmaa Elbahrawy",
    title: "CSS Tips",
    content: "Use flexbox and grid together for better layouts!",
    likes: 5,
    views: 21,
    date: "Sat, Nov 30, 5:00 PM",
    isLiked: false,
    isPinned: false,
    comments: [],
    showComments: false,
  },
];

const Community: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [commentText, setCommentText] = useState<{ [key: number]: string }>({});

  // ✅ تحميل البيانات الوهمية
  useEffect(() => {
    setPosts(defaultPosts);
  }, []);

  // 👁️ زيادة views مرة واحدة
  useEffect(() => {
    setPosts((prev) =>
      prev.map((post) => ({
        ...post,
        views: post.views + 1,
      }))
    );
  }, []);

  // LIKE POST
  const handleLike = (id: number) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  // REMOVE POST
  const handleRemove = (id: number) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  // PIN POST
  const handlePin = (id: number) => {
    setPosts((prev) => {
      const updated = prev.map((post) =>
        post.id === id
          ? { ...post, isPinned: !post.isPinned }
          : post
      );

      return [
        ...updated.filter((p) => p.isPinned),
        ...updated.filter((p) => !p.isPinned),
      ];
    });
  };

  // TOGGLE COMMENTS
  const toggleComments = (id: number) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? { ...post, showComments: !post.showComments }
          : post
      )
    );
  };

  // ADD COMMENT
  const handleAddComment = (id: number) => {
    const text = commentText[id];

    if (!text?.trim()) return;

    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              comments: [
                ...post.comments,
                { text, isLiked: false },
              ],
            }
          : post
      )
    );

    setCommentText((prev) => ({ ...prev, [id]: "" }));
  };

  // LIKE COMMENT
  const handleLikeComment = (postId: number, index: number) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map((c, i) =>
                i === index
                  ? { ...c, isLiked: !c.isLiked }
                  : c
              ),
            }
          : post
      )
    );
  };

  return (
    <>
      <NavTeacher />

      <div className="profile-container">
        <h2 className="profile-title">Community</h2>
        <p className="profile-subtitle">
          Monitor and moderate student discussions
        </p>
      </div>

      <div className="community-container">
        <div className="filter-bar">
          <select>
            <option>All Subject</option>
          </select>
        </div>

        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <div className="post-header">
              <div className="user-info">
                <img src={Logo} alt="" className="avatar" />
                <div>
                  <h4>
                    {post.author}
                    {post.isPinned && <span> 📌</span>}
                  </h4>
                  <p className="post-title">{post.title}</p>
                </div>
              </div>
              <span className="date">{post.date}</span>
            </div>

            <p className="post-content">{post.content}</p>

            <div className="post-actions">
              <div className="buttons">
                <button className="pin" onClick={() => handlePin(post.id)}>
                  📌 {post.isPinned ? "Pinned" : "Pin post"}
                </button>

                <button
                  className="remove"
                  onClick={() => handleRemove(post.id)}
                >
                  Remove post
                </button>
              </div>

              <div className="stats">
                <span onClick={() => handleLike(post.id)}>
                  <img
                    src={Like}
                    alt=""
                    className={post.isLiked ? "like-active" : ""}
                  />{" "}
                  {post.likes}
                </span>

                <span onClick={() => toggleComments(post.id)}>
                  <img src={comment} alt="" />{post.comments.length}
                </span>

                <span>👁️ {post.views}</span>
              </div>
            </div>

            {post.showComments && (
              <div className="comments">
                <div className="comment-box">
                  <input
                    value={commentText[post.id] || ""}
                    onChange={(e) =>
                      setCommentText((prev) => ({
                        ...prev,
                        [post.id]: e.target.value,
                      }))
                    }
                    placeholder="Write a comment..."
                  />
                  <button onClick={() => handleAddComment(post.id)}>
                    Send
                  </button>
                </div>

                {post.comments.map((c, i) => (
                  <div key={i} className="comment">
                    <p>{c.text}</p>
                    <span
                      onClick={() => handleLikeComment(post.id, i)}
                      className={c.isLiked ? "liked-comment" : ""}
                    >
                      <img src={Like} alt="like" />
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <FooterTeacher />
    </>
  );
};

export default Community;