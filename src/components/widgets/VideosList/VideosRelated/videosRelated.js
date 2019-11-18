import React from 'react'
import styles from '../videosList.css'
import VideosListTemplate from '../videosTemplate';

const VideosRelated = (props) => {
    return (
        <div className={styles.relatedWrapper}>
            <VideosListTemplate
                data={props.data}
                teams={props.teams}
            />
        </div>
    )

}

export default VideosRelated