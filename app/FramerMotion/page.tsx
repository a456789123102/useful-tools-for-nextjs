"use client";
import React from "react";
import { motion } from "framer-motion";


function FramerMotion() {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-blue-600">Framer Motion Example</h1>
                <p className="text-lg text-gray-700 mt-2">
                    Framer Motion เป็นไลบรารีสำหรับการสร้างแอนิเมชันใน React ที่ใช้งานง่ายและทรงพลัง ซึ่งรองรับการใช้งานตั้งแต่แอนิเมชันทั่วไปจนถึงแอนิเมชันขั้นสูง เช่น Gestures และ Dragging
                </p>
            </header>

            <div className="mb-8 gap-2 p-2 bg-gray-100">
                <h2 className="text-2xl font-semibold text-gray-800">Animation Example</h2>
                <div className=" flex flex-col  gap-1">
                    <motion.div
                        className="w-20 h-20 bg-blue-500 rounded m-6 hover:animate"
                        animate={{ scale: 1.5, rotate: 90 }}
                        transition={{ duration: 5, repeat: Infinity }}
                    />
                    <li>motion.div คือ div ที่รองรับแอนิเมชัน</li>
                    <li>animate ระบุแอนิเมชันที่ต้องการ เช่น scale และ rotate</li>
                    <li>transition ควบคุมความเร็ว (เช่น duration: 1 หมายถึง 1 วินาที)</li>
                </div>
                <div className=" flex flex-col  gap-1">
                    <motion.div
                        className="w-32 h-32 bg-green-500 rounded"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                                    <li>whileHover ใช้เมื่อเมาส์วางบนวัตถุ (เช่น ขยายกล่อง</li>
                <li>whileTap ใช้เมื่อคลิก (เช่น ลดขนาดกล่อง)</li>
                <li>transition แบบ Spring เพิ่มความสมจริง</li>
                </div>

            </div >

            <section>
                <h2 className="text-2xl font-semibold text-gray-800">Framer Motion:</h2>
                <ul className="list-disc ml-8 text-gray-700 mt-4">
                    <li>เป็นเครื่องมือที่ทรงพลังสำหรับการสร้างแอนิเมชัน</li>
                    <li>ใช้งานง่ายเพราะปรับตัวกับ React ได้อย่างสมบูรณ์แบบ</li>
                    <li>รองรับฟีเจอร์สำคัญ เช่น Gestures, Dragging, Layout Transitions และ Variants</li>
                </ul>
                <div className='text-2xl font-semibold text-gray-800'>To install</div>
                <li>pnpm add framer-motion</li>
                <li>
      เรียนรู้เพิ่มเติมเกี่ยวกับ Motion:
      <a href="https://motion.dev/docs/examples" target="_blank" rel="noopener noreferrer">
        https://motion.dev/docs/examples
      </a>
    </li>
            </section>
        </div >
    );
}

export default FramerMotion;
