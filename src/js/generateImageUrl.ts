const generateImageUrl = ({
  filename,
  format,
  option = "c_fill",
}: {
  filename: string;
  format: "jpg" | "webp";
  option?: string;
}) => {
  return `https://res.cloudinary.com/dysbcyhmx/image/upload/${option}/${format}/${filename}.${format}`;
};

export default generateImageUrl;
