import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./server_url"


//add component api
export const uploadVideoAPI= async(video)=>{
  return  await commonAPI("POST",`${SERVER_URL}/videos`,video)
}

//get video api called by view component
export const getAllVideosAPI=async()=>{
    return  await commonAPI("GET",`${SERVER_URL}/videos`,"")
}

//store watch hiistory
export const saveHistoryAPI= async(videoDetails)=>{
  return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}

//get history to watch component
export const getHistoryAPI= async()=>{
  return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

//delete watch history
export const deleteHistoryAPI = async(videoId)=>{
  return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}

//delete video
export const removeVideoAPI = async(videoId)=>{
  return await commonAPI("DELETE",`${SERVER_URL}/videos/${videoId}`,{})
}

//add category
export const addCategoryAPI = async(categoryDetails)=>{
  return await commonAPI("POST",`${SERVER_URL}/categories`,categoryDetails)
}

//get category
export const getCategoryAPI = async()=>{
  return await commonAPI("GET",`${SERVER_URL}/categories`,"")
}

//remove category
export const removeCategoryAPI = async(categoryId)=>{
  return await commonAPI("DELETE",`${SERVER_URL}/categories/${categoryId}`,{})
}

//get single video
export const getVideoAPI = async(videoId)=>{
  return await commonAPI("GET",`${SERVER_URL}/videos/${videoId}`,"")
}

//update category API
export const updateCategoryAPI=async(categoryId,updateCategoryDetails)=>{
  return await commonAPI("PUT",`${SERVER_URL}/categories/${categoryId}`,updateCategoryDetails)
}

//get single category API
export const getSingleCategoryAPI = async(categoryId)=>{
  return await commonAPI("GET",`${SERVER_URL}/categories/${categoryId}`,"")
}