import PropTypes from "prop-types";
import { FriendListItem } from "./FriendListItem/FriendListItem";

export const FriendList = ( { friends }) => {
  return <ul className="friend-list">
    {friends.map((friend) => {
    return <FriendListItem 
    key={friend.id}
    avatar={friend.avatar}
    name={friend.name} 
    isOnline={friend.isOnline}  />})}
 
</ul>
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      isOnline: PropTypes.bool.isRequired,
 avatar: PropTypes.string.isRequired,
 name: PropTypes.string.isRequired,
 id: PropTypes.number.isRequired,
    })
  )

}