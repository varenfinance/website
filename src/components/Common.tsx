type Info = {
  text: string;
  position: 'left' | 'right';
  className?: string;
};

export const Info = ({ text, position, className }: Info) => {
  return (
    <div className={`info ${className} px-3 py-2`}>
      <div className={position !== 'left' ? 'leftArrow' : 'rightArrow'}>{text}</div>
    </div>
  );
};
