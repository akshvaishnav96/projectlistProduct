export default function para({ data }) {
  if (data) {
    data = "🔘 " + data;
  }
  return <p className="ml-2 text-sm text-gray-500">{data}</p>;
}
