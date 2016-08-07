const BASE_URL = "http://localhost:3000 "

export const CONFIG = {
  ENDPOINTS: {
    projects: () => {
      return BASE_URL + "/projects.json"
    }
  }
}

export default CONFIG
