import profile from "./user.json"

export const User = () => {
  return (
  <div className="profile">
  <div clasclassNames="description">
    <img src={profile.avatar}
      alt={profile.username}
      className="avatar"
    />
    <p className="name">{profile.username}</p>
    <p className="tag">{profile.tag}</p>
    <p className="location">{profile.location}</p>
  </div>
  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{profile.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{profile.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{profile.likes}</span>
    </li>
  </ul>
</div>);
};