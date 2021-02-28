class ApiService {
  constructor(baseUrl) {
    this.url = baseUrl
  }

  async createPost(post) {
    try {
      const request = new Request(this.url + '/post.json', {
        method: 'post',
        body: JSON.stringify(post)
      })

      return makeFetch(request)
    } catch (error) {
      console.warn(error)
    }
  }

  async fetchPost() {
    try {
      const request = new Request(this.url + '/post.json', {
        method: 'get'
      })

      return makeFetch(request)
    } catch (error) {
      console.warn(error)
    }
  }

  async fetchPostId(id) {
    try {
      const request = new Request(this.url + `/post/${id}.json`, {
        method: 'get'
      })

      return makeFetch(request)
    } catch (error) {
      console.warn(error)
    }
  }

}

async function makeFetch(request) {
  const response = await fetch(request)

  return await response.json()
}

export const apiService = new ApiService('https://blog-js-c9086-default-rtdb.firebaseio.com')