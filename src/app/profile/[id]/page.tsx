export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold mb-10">User Profile</h1>
      <p>id: {params.id}</p>
    </div>
  );
}
