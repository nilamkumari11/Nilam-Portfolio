import { testOrbitingItems } from "./OrbitingItemsData";
import { cn } from "./lib/utils";

const calculateItemStyle = ({ index, radius, totalItems }) => {
  const angle = (index / totalItems) * 360;
  const radians = (angle * Math.PI) / 180;
  const x = radius * Math.cos(radians);
  const y = radius * Math.sin(radians);
  return {
    left: `${50 + x}%`,
    top: `${50 + y}%`,
    transform: "translate(-50%, -50%)",
  };
};

export default function OrbitingItems({
  radius = 50,
  items = testOrbitingItems,
  pauseOnHover = true,
  backgroundClassName = "",
  containerClassName = "",
  className = "",
}) {
  return (
    <div
      className={cn(
        "storybook-fix group flex items-center justify-center py-32 relative",
        containerClassName
      )}
    >
      {/* Background Circle */}
      <div
        className={cn(
          "absolute inset-0 h-full w-full rounded-full",
          backgroundClassName
        )}
      />

      {/* Rotating Outer Ring */}
      <div
        className={cn(
          "relative flex h-64 w-64 items-center justify-center rounded-full border-2 border-gray-500 ease-linear orbit-rotate",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          className
        )}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-gray-200"
            style={calculateItemStyle({ index, radius, totalItems: items.length })}
          >
            {/* Counter rotation on each icon */}
            <div
              className={cn(
                "ease-linear orbit-counter-rotate",
                pauseOnHover && "group-hover:[animation-play-state:paused]"
              )}
            >
              {item}
            </div>
          </div>
        ))}

        {/* Inner Static Circle */}
        <div className="absolute h-1/2 w-1/2 rounded-full border-2 border-gray-700" />
      </div>
    </div>
  );
}
