import axios from "axios"
import { useCookies } from "react-cookie"
import React from 'react'

export const AddData = async (value) => {
    const config = {
        method: 'POST',
        url: 'subjects/store',
        data: value,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          // Authorization: `Bearer ${cookies.token}`,
        },
          }
      const { data } = await axios(config)
      return data 
}

export const AddNotifyAll = async (value) => {
    const config = {
        method: 'PUT',
        url: 'users/notify-all',
        data: value,
        headers: {
        'Content-Type': 'application/json; charset=utf-8',
        // Authorization: `Bearer ${cookies.token}`,
        },
        }
    const { data } = await axios(config) 
    return data
}
export const AddFavourite = async (param, value) => {
    
    const config = {
        method: 'PUT',
        url: 'users/favourite',
        data:  value, 
        params: { email : param },
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          // Authorization: `Bearer ${cookies.token}`,
        },
      }
      const {data} = await axios(config)

    return data
}

export const AddShare = async (param, value) => {
    const config = {
        method: 'PUT',
        url: 'users/notify',
        params: { email: param },
        data: value,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            // Authorization: `Bearer ${cookies.token}`,
        },
    }
    const { data } = await axios(config) 
    return data
}

export const AddStorge = async (param, value) => {
    const config = {
        method: 'PUT',
        url: 'users/storage',
        params: { email: param },
        data: value,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            // Authorization: `Bearer ${cookies.token}`,
        },
    }
    const { data } = await axios(config) 
    return data
}