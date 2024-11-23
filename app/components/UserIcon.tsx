export function UserIcon({
  imageUrl,
  name,
}: {
  imageUrl: string | null | undefined;
  name: string | null | undefined;
}) {
  const defaultImageUrl = 'https://via.placeholder.com/150';
  const defaultName = 'Unknown User';

  return (
    <div>
      <div className="flex items-center">
        <img
          src={imageUrl || defaultImageUrl}
          alt={`${name || defaultName}'s avatar`}
          className="w-12 h-12 rounded-full object-cover"
        />
        <span className="ml-4 text-lg font-semibold text-gray-700">{name || defaultName}</span>
      </div>
    </div>
  );
}
