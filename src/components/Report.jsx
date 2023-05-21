import './report.css'

const Report = () => {
    return (
        <section className="text-gray-600 body-font flex items-center justify-center mt-32">
            <div className="w-full container mx-auto py-3 px-5 max-w-5xl space-y-1">
                <div className="text-2xl font-italic font-light text-center mb-4">
                    KindaCode.com - FAQ
                </div>

                {/* <!-- The First FAQ --> */}
                <details className="bg-cyan-300 open:bg-gray-300 duration-300">
                    <summary className="relative bg-inherit px-5 py-2 text-lg cursor-pointer list-none">The first frequently asked question</summary>
                    <div className="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
                        <p>Praesent posuere nisi vel diam congue varius. Praesent lacus nulla, congue nec rhoncus nec,
                            suscipit et enim. Donec ultrices nec arcu et pharetra.</p>
                    </div>
                </details>


                {/* <!-- The Second FAQ --> */}
                <details className="bg-cyan-300 open:bg-gray-300 duration-300">
                    <summary className="relative bg-inherit px-5 py-2 text-lg cursor-pointer list-none">Just another question</summary>
                    <div className="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
                        <p>Just some dummy content. Just some dummy content. Just some dummy content. Just some dummy content
                            Just some dummy content. Just some dummy content</p>
                    </div>
                </details>

                {/* <!-- The Third FAQ --> */}
                <details className="bg-cyan-300 open:bg-gray-300 duration-300">
                    <summary className="relative bg-inherit px-5 py-2 text-lg cursor-pointer list-none">How is the weather today?</summary>
                    <div className="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
                        <ul>
                            <li>List Item 1</li>
                            <li>List Item 2</li>
                        </ul>
                    </div>
                </details>
            </div>
        </section>
    )
}

export default Report