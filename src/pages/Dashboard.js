import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css"; // Create this CSS file for styling

const API_URL = "https://sdr10vqtg4.execute-api.us-east-1.amazonaws.com/v1";

function Dashboard() {
    const [stockData, setStockData] = useState([]);
    const [barcode, setBarcode] = useState("ITEM-1001");
    const [quantity, setQuantity] = useState("");

    // Fetch stock data from API Gateway
    useEffect(() => {
        axios.get(`${API_URL}/get-stock`)
            .then(response => {
                console.log("API Response:", response.data); // Debugging
                setStockData(response.data); // Fix: Accessing the first array inside the response
            })
            .catch(error => console.error("API Error:", error.response ? error.response.data : error));
    }, []);

    // Function to manually add stock
    const handleAddStock = () => {
        axios.post(`${API_URL}/add-stock`, { barcode, quantity: parseInt(quantity) })
            .then(response => {
                alert(`Stock updated: New Quantity = ${response.data.new_stock}`);
                setBarcode("");
                setQuantity("");
            })
            .catch(error => alert("Error updating stock: " + error.message));
    };
    console.log(stockData)

    return (
        <div>
            <h2>📦 Smart Storage Dashboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Barcode</th>
                        <th>Product Name</th>
                        <th>Stock Quantity</th>
                        <th>Low Stock Threshold</th>
                    </tr>
                </thead>
                <tbody>
                    {stockData && stockData.length > 0 ? (
                        stockData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.barcode}</td>
                                <td>{item.product_name}</td>
                                <td>{item.stock_quantity}</td>
                                <td>{item.low_stock_threshold}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
    
}

export default Dashboard;
