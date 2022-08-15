

export const authHeader= {
  headers:{
      'Authorization': localStorage?.getItem('accessToken')
  }
}