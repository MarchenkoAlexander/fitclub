import React, { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { motion } from 'framer-motion'

const Testimonials = () => {
    const transition = { type: "string", duration: 3 }
    const [selected, setSelected] = useState(1);
    const tLength = testimonialsData.length;

    return (
        <div className="testimonials">
            <div className="left-t">
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>
                <motion.span
                    key={selected}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                >
                    {testimonialsData[selected].review}
                </motion.span>
                <span>
                    <span style={{ color: 'var(--orange)' }}>
                        {testimonialsData[selected].name}
                    </span>
                    {' - '} {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className='border-1'></motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className='border-2'></motion.div>
                <div>
                    <motion.img
                        key={selected}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        src={testimonialsData[selected].image} alt="" className='coach-img' />

                    <div className="arrows">
                        <img src={leftArrow} alt="" className='arrow-left' onClick={() => {
                            selected === 0
                                ? setSelected(tLength - 1)
                                : setSelected(prev => prev - 1)
                        }
                        } />
                        <img src={rightArrow} alt="" className='arrow-right' onClick={() => {
                            selected === tLength - 1
                                ? setSelected(0)
                                : setSelected(prev => prev + 1)
                        }
                        } />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials