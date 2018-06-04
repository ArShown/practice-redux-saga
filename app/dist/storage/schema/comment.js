/* @flow */
export default class Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;

  constructor() {
    this.postId = 0;
    this.id = 0;
    this.name = '';
    this.email = '';
    this.body = '';
  }
}
