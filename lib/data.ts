'use client';
import React from 'react';
import { FaLightbulb, FaListNumbered, FaCertificate, FaHeart, FaBook } from 'react-icons/fa';

import {FaEnvelopeOpen} from "react-icons/fa";

export const companyValues = [
    {
        title: "Inovasi",
        desc: "Mengadopsi pendekatan kreatif dan solusi inovatif untuk merespons kebutuhan pendidikan yang berkembang.",
        icon: <FaEnvelopeOpen />
    },
    {
        title: "Keterbukaan",
        desc: "Menciptakan lingkungan yang inklusif, menerima berbagai perspektif, dan mempromosikan keberagaman.",
        icon: <FaListNumbered />
    },
    {
        title: "Integritas",
        desc: "Berkomitmen pada kejujuran, etika, dan transparansi dalam setiap aspek bisnis dan interaksi.",
        icon: <FaCertificate />
    },
    {
        title: "Kepedulian",
        desc: "Memahami dan meresapi kebutuhan masyarakat serta berkontribusi pada kesejahteraan melalui proyek sosial.",
        icon: <FaHeart />
    },
    {
        title: "Pendidikan Berkualitas",
        desc: "Meneguhkan komitmen terhadap penyediaan layanan pendidikan terbaik dan pemahaman yang mendalam.",
        icon: <FaBook />
    }
];
