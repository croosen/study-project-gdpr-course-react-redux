import { Dispatch } from 'redux'


export const GET_COURSE = 'GET_COURSE'
function getCourse() {
  return {
    type: GET_COURSE,
  }
}

export const GET_COURSE_SUCCESS = 'GET_COURSE_SUCCESS'
function getCourseSuccess(json: any) {
  return {
    course: json.data.children.map((child: any) => child.data),
    type: GET_COURSE_SUCCESS,
  }
}

export function fetchCourse() {
  return (dispatch: Dispatch<any>) => {
    dispatch(getCourse())
    return fetch(`../../content/content.json`)
      .then(response => response.json())
      .then(json => dispatch(getCourseSuccess(json)))
  }
}

// export function fetchCurrentCourse() {
//   return (dispatch: Dispatch<any>, getState: any) => {
//     return dispatch(fetchCourse())
//   }
// }
