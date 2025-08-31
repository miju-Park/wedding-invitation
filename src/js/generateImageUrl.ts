const generateImageUrl = ({
  filename,
  format,
  option = "q_auto,c_fill",
}: {
  filename: string;
  format: "jpg" | "webp";
  option?: string;
}) => {
  return `https://res.cloudinary.com/dysbcyhmx/image/upload/v1756644591/${format}/${filename}.${format}`;
};

export default generateImageUrl;
