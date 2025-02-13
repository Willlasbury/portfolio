export default function Resume() {
    return (
        <section id="resume" className="flex flex-col items-center py-1">
            <h2 className="h-1/6 text-3xl font-bold mb-2 text-center">Resume</h2>
            {/* <iframe src="public/assets/resume" width="100%" height="100%"></iframe> */}
            <div className="flex flex-col items-center">
                   <img src="assets/resume.jpg" alt="resume" className="w-5/6 h-5/6" />
            </div>
        </section>
    )
}