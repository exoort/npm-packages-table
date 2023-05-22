export interface INpmPackage {
  package: INpmPackageDetails
  score: INpmPackageScore
  searchScore: number
}

export interface INpmPackageDetails {
  name: string
  scope: string
  version: string
  description: string
  date: string
  links: Links
  publisher: Publisher
  maintainers: Maintainer[]
  keywords?: string[]
  author?: Author
}

export interface Links {
  npm: string
  homepage: string
  repository: string
  bugs: string
}

export interface Publisher {
  username: string
  email: string
}

export interface Maintainer {
  username: string
  email: string
}

export interface Author {
  name: string
  email?: string
  url?: string
  username?: string
}

export interface INpmPackageScore {
  final: number
  detail: Detail
}

export interface Detail {
  quality: number
  popularity: number
  maintenance: number
}
