interface IPost {
  id: string
  username: string
  profile: string
  image: string
  description: string
  likes: string
  createdAt: string
  isNew?: boolean;
}

export default IPost
