import Link from 'next/link';
import React from 'react'

function StayAhead() {
    return (
        <section className='stayahead-bgcolor'>
            <div className='container'>
                <div className='stayahead_main'>
                    <h2>Stay Ahead — With News That Matters to You</h2>
                    <p>Subscribe to our newsletter and get updates tailored to your interests. Choose the topics, categories, and insights you care about — delivered straight to your inbox, with no noise, just relevance.</p>
                    <input type="Email" placeholder='Email' />
                    <div>
                        <Link href='#'>
                            <button className="footer-newsletter-button">SUBSCRIBE</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StayAhead;
