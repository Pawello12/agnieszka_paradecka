import React from 'react';
import Form from '../../components/Form/Form';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import {motion} from 'framer-motion';
import pageTransition from '../../config/pageTransition';

const Contact = () => {
    return(
        <motion.main className="main main-contact" initial={pageTransition.initial} animate={pageTransition.animate} exit={pageTransition.exit} transition={pageTransition.duration}>
            <Form/>
            <SocialMedia />
        </motion.main>
    )
}

export default Contact;