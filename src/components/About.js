import React from 'react'

export default function About() {
    return (
        <div className="container my-3">
            <h2 className="mb-3">About Us</h2>

            <div className="accordion" id="accordionExample">

                <div
                    className="accordion-item"
                    style={{
                        backgroundColor: 'transparent',
                        color: 'inherit'
                    }}
                >
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            style={{
                                backgroundColor: 'transparent',
                                color: 'inherit'
                            }}
                        >
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div
                            className="accordion-body"
                            style={{
                                backgroundColor: 'transparent',
                                color: 'inherit'
                            }}
                        >
                            TextUtils provides powerful text analysis tools to help users understand and improve their content. It offers real-time word count, character count, and estimated reading time, making it useful for students, writers, and professionals.
                        </div>
                    </div>
                </div>

                <div
                    className="accordion-item"
                    style={{
                        backgroundColor: 'transparent',
                        color: 'inherit'
                    }}
                >
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                            style={{
                                backgroundColor: 'transparent',
                                color: 'inherit'
                            }}
                        >
                            <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div
                            className="accordion-body"
                            style={{
                                backgroundColor: 'transparent',
                                color: 'inherit'
                            }}
                        >
                            TextUtils is a completely free web application designed to simplify text editing and formatting tasks. Users can instantly convert text to uppercase or lowercase, remove extra spaces, copy content, and perform other text transformations without any cost.
                        </div>
                    </div>
                </div>

                <div
                    className="accordion-item"
                    style={{
                        backgroundColor: 'transparent',
                        color: 'inherit'
                    }}
                >
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                            style={{
                                backgroundColor: 'transparent',
                                color: 'inherit'
                            }}
                        >
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div
                            className="accordion-body"
                            style={{
                                backgroundColor: 'transparent',
                                color: 'inherit'
                            }}
                        >
                            TextUtils is built using modern web technologies including React.js, HTML, CSS, and Bootstrap. The application is fully responsive and works smoothly across major browsers such as Google Chrome, Microsoft Edge, Firefox, and Safari on both desktop and mobile devices.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}