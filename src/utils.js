/**
 * set data endpoint below: BASE_URL
 * schema example in mock.json
 */
const BASE_URL ='';
const mockBaseUrl = 'http://localhost:3002/';

const BREAKPOINT = 500;

export const ACTION_TYPES = {
	LIKES: 'likes',
	FOLLOWERS: 'followers',
	FOLLOWING: 'following'
}

export const RESOURCES = {
  PERSON: 'person',
  COMMENTS: 'comments'
}

export const getCurrentUrl = () => window.location.href;

export const getScreenSize = () => {
	return window.screen.availWidth <= BREAKPOINT ? 'small' : 'big';
};

const getBaseUrl = () => process.env.NODE_ENV === 'development' ? mockBaseUrl : BASE_URL;

export const fetchData = async (resource) => {
  // TODO use retry lib on 500 erros
	const resp = await fetch(`${getBaseUrl()}${resource}`);
	if (resp.status !== 200) {
	  throw new Error(resp.status);
	}
  
	return resp.json();
}
