let saleData =[];
let page = 1;
const perPage = 10;
const saleTableTemplate = _.template(`
                            <% _.forEach(sales, function(sale) { %>
                                <tr> 
                               
                                <td><%- sale.email %></td> 
                                <td><%- sale.storeLocation %></td> 
                                <td><%- sale.items.length %></td> 
                                <td><%- moment.utc(sale.saleDate).local().format('LLLL') %></td> 
                                </tr>
                            <% }); %>
                            `);

//saleModelBodyTemplate = 


// can you maybe open notpepa */

function loadSaleData(){

    fetch(`https://straw-very-very-icecream.herokuapp.com/api/sales?page=${page}&perPage=${perPage}`).then(res=>{
            console.log("first then");    
            return res.json();
        }).then(data=>{
            console.log(data);
            let dataTable = saleTableTemplate({sales: data});
            $("#sale-table tbody").html(dataTable);
            $("#current-page").text(page);
            
    })
}

$(function(){
    loadSaleData();

    $("#next-page").on("click", function(){
        page++;
        loadSaleData();
    });
});