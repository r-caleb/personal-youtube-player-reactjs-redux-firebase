import React, { useEffect, useState } from 'react'
import './_videoHorizontal.scss'

import { AiFillEye } from 'react-icons/ai'
import request from '../../api'

import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const VideoHorizontal = () => {


   const [views, setViews] = useState(null)
   const [duration, setDuration] = useState(null)
   const [channelIcon, setChannelIcon] = useState(null)


   const seconds = moment.duration(duration).asSeconds()
   const _duration = moment.utc(seconds * 1000).format('mm:ss')

   const navigate = useNavigate()



   return (
      <Row
         className='py-2 m-1 videoHorizontal align-items-center'
         >
         {/* //TODO refractor grid */}
         <Col
            xs={6}
            md={4}
            className='videoHorizontal__left'>
            <LazyLoadImage
               src='https://geekflare.com/wp-content/uploads/2018/05/github-1200x385.jpg'
               effect='blur'
               className={`videoHorizontal__thumbnail`}
               wrapperClassName='videoHorizontal__thumbnail-wrapper'
            />
               <span className='videoHorizontal__duration'>{_duration}</span>
            
         </Col>
         <Col
            xs={6}
   md={8}
            className='p-0 videoHorizontal__right'>
            <p className='mb-1 videoHorizontal__title'>title</p>

               <div className='videoHorizontal__details'>
                  <AiFillEye /> {numeral(1000000).format('0.a')} Views •
                  {moment('2022-06-6').fromNow()}
               </div>

            <div className='my-1 videoHorizontal__channel d-flex align-items-center'>
               {/* {isVideo && (
                  <LazyLoadImage src={channelIcon?.url} effect='blur' />
               )} */}
               <p className='mb-0'>channelTitle</p>
            </div>
        
         </Col>
      </Row>
   )
}

export default VideoHorizontal
