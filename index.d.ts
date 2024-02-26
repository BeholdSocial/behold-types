interface Feed {
  username: string
  biography: string
  profilePictureUrl: string
  website: string
  followersCount: number
  followsCount: number
  hashtags?: string[]
  posts: Post[]
}

interface Post {
  id: string
  timestamp: string
  permalink: string
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
  isReel?: boolean
  mediaUrl: string
  thumbnailUrl?: string
  sizes: PostSizes
  caption: string
  prunedCaption: string
  hashtags: string[]
  hashtag?: string
  mentions: string[]
  colorPalette: ColorPalette
  children?: ChildPost[]
}

interface ChildPost {
  id: string
  mediaType: string
  mediaUrl: string
  sizes: PostSizes
  colorPalette: ColorPalette
}

interface PostSizes {
  small: PostSize
  medium: PostSize
  large: PostSize
  full: PostSize
}

interface PostSize {
  height: number
  width: number
  mediaUrl: string
}

interface ColorPalette {
  dominant: RGBString
  muted: RGBString
  mutedLight: RGBString
  mutedDark: RGBString
  vibrant: RGBString
  vibrantLight: RGBString
  vibrantDark: RGBString
}

type RGBString = `${number}, ${number}, ${number}`
