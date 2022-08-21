const GoogleMap = ({ width, height, className, opacity }) => {
    return (
        <div className={className || " bg-gray-800"}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.056705720663!2d91.9708285148397!3d24.930138084021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750552bc71c899d%3A0x804e438bcc32b390!2sMetropolitan%20University!5e0!3m2!1sen!2sbd!4v1661096081841!5m2!1sen!2sbd"
                width={width || "100%"}
                height={height || "450px"}
                style={{ opacity: opacity || ".7" }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default GoogleMap;
