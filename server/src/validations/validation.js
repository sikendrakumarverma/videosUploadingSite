const isValidFile = (value) => {

    if (value.length == 0) {
        return "No file found";
    }

    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value[0].originalname)) {
        return "file must not contain Whitespaces.";
    }

    let regex = /^.*\.(jpg|JPG|gif|GIF|png|jpeg|mp4|MP4)$/
    if (!regex.test(value[0].originalname)) {
        return "Invalid file extension.";
    }

}

module.exports= {isValidFile};