function Table() {
    return (
        <div className="w-3/5 mt-8 overflow-auto rounded-lg shadow bg-white">
            <table className="w-full text-sm text-left text-gray-500">
                <thead>
                    <tr className="bg-gray-100 text-gray-700">
                        <th className="py-2 px-6">NO.</th>
                        <th className="py-2 px-6">CAMPAIGN</th>
                        <th className="py-2 px-6">VISITORS</th>
                        <th className="py-2 px-6">CONTACTS</th>
                        <th className="py-2 px-6">COMPANIES</th>
                        <th className="py-2 px-6">LEADS</th>
                        <th className="py-2 px-6">VALUES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b odd:bg-white even:bg-gray-200">
                        <td className="py-4 px-6">1</td>
                        <td className="py-4 px-6">SEARCH/BRAND</td>
                        <td className="py-4 px-6">1,181</td>
                        <td className="py-4 px-6">217</td>
                        <td className="py-4 px-6">150</td>
                        <td className="py-4 px-6">26.9</td>
                        <td className="py-4 px-6">78.29</td>
                    </tr>
                    {/* Add more table rows here */}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
