export interface Feed {
  username: string
  biography: string
  profilePictureUrl: string
  website: string
  followersCount: number
  followsCount: number
  hashtags?: string[]
  posts: Post[]
}

export interface Post {
  id: string
  timestamp: string
  permalink: string
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
  isReel?: boolean
  mediaUrl: string
  thumbnailUrl?: string
  sizes: PostSizes
  caption: string
  altText?: string
  prunedCaption: string
  hashtags: string[]
  hashtag?: string
  mentions: string[]
  likeCount: number
  commentsCount: number
  colorPalette: ColorPalette
  children?: ChildPost[]
}

export interface ChildPost {
  id: string
  mediaType: "IMAGE" | "VIDEO"
  mediaUrl: string
  thumbnailUrl?: string
  sizes: PostSizes
  colorPalette: ColorPalette
  altText?: string
}

export interface PostSizes {
  small: PostSize
  medium: PostSize
  large: PostSize
  full: PostSize
}

export interface PostSize {
  height: number | null
  width: number | null
  mediaUrl: string
}

export interface ColorPalette {
  dominant: RGBString
  muted: RGBString
  mutedLight: RGBString
  mutedDark: RGBString
  vibrant: RGBString
  vibrantLight: RGBString
  vibrantDark: RGBString
}

export type RGBString = `${number}, ${number}, ${number}`
