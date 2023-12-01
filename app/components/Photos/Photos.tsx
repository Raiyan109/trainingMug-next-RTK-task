'use client'

/* Core */
import { useEffect, useState } from 'react'

/* Instruments */
import {
    counterSlice,
    useSelector,
    useDispatch,
    selectCount,
    incrementAsync,
    incrementIfOddAsync,
} from '@/lib/redux'
import styles from './counter.module.css'
import { getPhotos } from '@/lib/redux/slices/photosSlice'

export const Photos = () => {
    const dispatch = useDispatch()
    const { photos } = useSelector(state => state.photos)
    const mappedPhoto = photos.filter(photo => photo.albumId === 1)
    console.log(mappedPhoto);


    useEffect(() => {
        dispatch(getPhotos())
    }, [])

    return (
        <div>
            <div className={styles.row}>
                {/* <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => dispatch(counterSlice.actions.decrement())}
                >
                    -
                </button>
                <span className={styles.value}>{count}</span>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => dispatch(counterSlice.actions.increment())}
                >
                    +
                </button> */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                    {mappedPhoto.map(({ id, title, thumbnailUrl, url }) => (
                        <div key={id} className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={url} alt="Shoes" /></figure>
                            <div className="card-body">

                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
