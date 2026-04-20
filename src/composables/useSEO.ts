export interface SEOInput {
  title: string
  description?: string
}

export function useSEO({ title, description }: SEOInput): void {
  document.title = title

  if (description !== undefined) {
    let descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag === null) {
      descriptionTag = document.createElement('meta')
      descriptionTag.setAttribute('name', 'description')
      document.head.appendChild(descriptionTag)
    }

    descriptionTag.setAttribute('content', description)
  }
}
