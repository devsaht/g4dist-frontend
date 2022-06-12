import React from 'react';
import styles from './Loader.module.css'

export default function Loader(){
    return (
        <div className="mt-4 d-flex justify-content-center">
            <div className={styles.ldsRoller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}