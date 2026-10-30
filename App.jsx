import React, { useState } from 'react'
import './App.css'

const me = {
  name: 'Iva Zafirovska',
  handle: '@ivazafirovska',
  avatar: 'https://ui-avatars.com/api/?name=Iva+Zafirovska&background=1DA1F2&color=fff&size=512',
  bio: 'Software engineer & React enthusiast. Building things on the web.',
  location: 'Earth',
  website: 'https://iva.dev',
  followers: '12.4K',
  following: '842',
  tweets: '342',
  likes: '891',
}

const trending = [
  { topic: '#ReactJS', tweets: '42.3K Tweets' },
  { topic: '#WebDev', tweets: '18.7K Tweets' },
  { topic: 'JavaScript', tweets: '91.2K Tweets' },
  { topic: '#Frontend', tweets: '12.1K Tweets' },
  { topic: 'Vite', tweets: '5.4K Tweets' },
]

const tweets = [
  {
    id: 1,
    user: me,
    text: 'Just finished rebuilding my portfolio with React and Vite. Feels great to ship something new! 🚀',
    image: 'https://images.unsplash.com/photo-1460925895917-afbe65ae8364?w=800&q=80',
    replies: 12,
    retweets: 45,
    likes: 210,
    views: '1.2K',
    time: '2h',
    repliedTo: null,
  },
  {
    id: 2,
    user: {
      name: 'Alice Dev',
      handle: '@alicedev',
      avatar: 'https://ui-avatars.com/api/?name=Alice+Dev&background=random',
    },
    text: 'Anyone know a good CSS framework for rapid prototyping in 2024? Tailwind or something lighter?',
    image: null,
    replies: 8,
    retweets: 3,
    likes: 34,
    views: '890',
    time: '5h',
    repliedTo: null,
  },
  {
    id: 3,
    user: {
      name: 'Bob Code',
      handle: '@bobcode',
      avatar: 'https://ui-avatars.com/api/?name=Bob+Code&background=random',
    },
    text: 'Sunday morning coding session ☕ The best bugs are the ones you create before breakfast.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    replies: 2,
    retweets: 1,
    likes: 56,
    views: '445',
    time: '8h',
    repliedTo: null,
  },
  {
    id: 4,
    user: me,
    text: 'React 19 is looking promising. Can’t wait to try the new compiler and actions.',
    image: null,
    replies: 5,
    retweets: 18,
    likes: 132,
    views: '2.1K',
    time: '1d',
    repliedTo: null,
  },
  {
    id: 5,
    user: {
      name: 'Diana UI',
      handle: '@dianaui',
      avatar: 'https://ui-avatars.com/api/?name=Diana+UI&background=random',
    },
    text: 'Design tip: whitespace is your friend. Don’t cram everything above the fold. Let it breathe.',
    image: 'https://images.unsplash.com/photo-1586716728651-7b702f8b71e1?w=800&q=80',
    replies: 3,
    retweets: 7,
    likes: 91,
    views: '1.8K',
    time: '1d',
    repliedTo: null,
  },
]

function TweetAction({ icon, label, count, active }) {
  return (
    <button className="tweet-action">
      <span className={`tweet-action-icon ${active ? 'active' : ''}`}>{icon}</span>
      <span className="tweet-action-label">{count > 0 ? count : label}</span>
    </button>
  )
}

function Tweet({ tweet }) {
  const [liked, setLiked] = useState(tweet.likes > 0 && tweet.id % 2 === 0)
  const [retweeted, setRetweeted] = useState(false)

  return (
    <article className="tweet">
      <div className="tweet-header">
        <img className="tweet-avatar" src={tweet.user.avatar} alt={tweet.user.name} />
        <div className="tweet-user-info">
          <div className="tweet-name">
            <span className="tweet-name-bold">{tweet.user.name}</span>
            <span className="tweet-handle"> {tweet.user.handle}</span>
            <span className="tweet-time"> · {tweet.time}</span>
          </div>
        </div>
      </div>
      <div className="tweet-text">{tweet.text}</div>
      {tweet.image && (
        <div className="tweet-image">
          <img src={tweet.image} alt={tweet.text} />
        </div>
      )}
      <div className="tweet-actions">
        <TweetAction icon="💬" label="Reply" count={tweet.replies} />
        <TweetAction
          icon="🔄"
          label="Repost"
          count={tweet.retweets}
          active={retweeted}
        />
        <TweetAction
          icon="❤"
          label="Like"
          count={tweet.likes}
          active={liked}
        />
        <TweetAction icon="📤" label="Share" count={0} />
      </div>
      <div className="tweet-views">{tweet.views}</div>
    </article>
  )
}

function ComposeTweet() {
  const [text, setText] = useState('')
  return (
    <div className="compose-tweet">
      <img className="compose-avatar" src={me.avatar} alt="" />
      <div className="compose-input-wrapper">
        <textarea
          className="compose-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What is happening?"
          rows={1}
        ></textarea>
        <div className="compose-actions">
          <button className="compose-btn compose-btn-icon">📷</button>
          <button className="compose-btn compose-btn-icon">🎥</button>
          <button className="compose-btn compose-btn-icon">📍</button>
          <button className="compose-btn compose-btn-icon">😊</button>
          <button className="compose-btn compose-btn-tweet">Tweet</button>
        </div>
      </div>
    </div>
  )
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile-card">
        <img className="profile-avatar" src={me.avatar} alt={me.name} />
        <div className="profile-info">
          <div className="profile-name">{me.name}</div>
          <div className="profile-handle">{me.handle}</div>
          <div className="profile-bio">{me.bio}</div>
          <div className="profile-location">📍 {me.location}</div>
          <div className="profile-website">🌐 {me.website}</div>
        </div>
        <div className="profile-stats">
          <div className="stat">
            <div className="stat-value">{me.tweets}</div>
            <div className="stat-label">Tweets</div>
          </div>
          <div className="stat">
            <div className="stat-value">{me.followers}</div>
            <div className="stat-label">Followers</div>
          </div>
          <div className="stat">
            <div className="stat-value">{me.following}</div>
            <div className="stat-label">Following</div>
          </div>
          <div className="stat">
            <div className="stat-value">{me.likes}</div>
            <div className="stat-label">Likes</div>
          </div>
        </div>
      </div>
      <div className="trending-section">
        <div className="section-header">Trending for you</div>
        <div className="trending-items">
          {trending.map((t, i) => (
            <div key={i} className="trending-item">
              <span className="trending-rank">{i + 1}</span>
              <div className="trending-info">
                <div className="trending-topic">{t.topic}</div>
                <div className="trending-count">{t.tweets}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

function Nav() {
  const items = [
    { label: 'Home', icon: '🏠', active: true },
    { label: 'Explore', icon: '🔍' },
    { label: 'Notifications', icon: '𔔁' },
    { label: 'Messages', icon: '💬' },
    { label: 'Profile', icon: '👤' },
    { label: 'More', icon: '⋯' },
  ]
  return (
    <nav className="nav">
      {items.map((item) => (
        <a
          key={item.label}
          className={`nav-item ${item.active ? 'nav-item-active' : ''}`}
        >
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </a>
      ))}
    </nav>
  )
}

function Header() {
  return (
    <header className="twitter-header">
      <div className="logo">🐦</div>
      <div className="search">
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="actions">
        <span className="icon">𔔁</span>
        <span className="icon">➕</span>
        <img className="avatar" src={me.avatar} alt="" />
      </div>
    </header>
  )
}

function App() {
  return (
    <div className="twitter-app">
      <Header />
      <div className="twitter-body">
        <Nav />
        <main className="feed">
          <ComposeTweet />
          {tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </main>
        <Sidebar />
      </div>
    </div>
  )
}

export default App
