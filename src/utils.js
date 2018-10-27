export const ACTION_TYPES = {
	LIKES: 'likes',
	FOLLOWERS: 'followers',
	FOLLOWING: 'following'
}
const BREAKPOINT = 500;

export const getCurrentUrl = () => window.location.href;

export const getScreenSize = () => {
	return window.screen.availWidth <= BREAKPOINT ? 'small' : 'big';
};