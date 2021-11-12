<template>
  <div class="home">
    <section>

      <div class="page-content">
      <div id="table">
      <table>
        <col style="width: 25%;">
        <col style="width: 25%;">
        <col style="width: 25%;">
        <col style="width: 25%;">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Miles</th>
            <th scope="col">Gallons</th>
            <th scope="col">Cost</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td><input type="date" v-model="date"></td>
            <td><input placeholder="miles" v-model="miles"></td>
            <td><input placeholder="gallons" v-model="gallons"></td>
            <td><input placeholder="cost" v-model="cost"></td>
            <td class="button-cell"><button @click="addEntry">Add</button></td>
          </tr>

          <tr v-for="entry in entries" :key="entry.id">
            <td>{{entry.date}}</td>
            <td>{{entry.miles}}</td>
            <td>{{entry.gallons}}</td>
            <td>${{entry.cost}}</td>
          </tr>
        </tbody>
      </table>
      </div>

      <div id='stats'>
      <p>Average MPG: <b>{{mpgToDate}}</b></p>
      <p>Average Cost per Gallon: <b>${{avgCostPerGallon}}</b></p>
      <p>Average Cost per Mile: <b>${{avgCostPerMile}}</b></p>
      </div>

    </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
     entries: [],
     date: "",
     miles: "",
     gallons: "",
     cost: "",
    }
  },
  created() {
    this.getEntries();
  },
  computed: {
    mpgToDate(){
      let totalMiles = 0;
      let totalGallons = 0;
      this.entries.forEach(entry => {
        totalMiles += parseFloat(entry.miles);
        totalGallons += parseFloat(entry.gallons);
      });
      return (totalMiles / totalGallons).toFixed(2);
    },
    avgCostPerGallon(){
      let totalCost = 0;
      let totalGallons = 0;
      this.entries.forEach(entry => {
        totalCost += parseFloat(entry.cost);
        totalGallons += parseFloat(entry.gallons);
      });
      return (totalCost / totalGallons).toFixed(2);
    },
    avgCostPerMile(){
      let totalCost = 0;
      let totalMiles = 0;
      this.entries.forEach(entry => {
        totalCost += parseFloat(entry.cost);
        totalMiles += parseFloat(entry.miles);
      });
      return (totalCost / totalMiles).toFixed(2);
    }
  },
  methods: {
    async getEntries() {
      try {
        let response = await axios.get("/api/entry");
        this.entries = response.data;
        this.entries.sort((first, second) => {
          const firstYear = first.date.slice(0,4);
          const secondYear = second.date.slice(0,4);
          const firstMonth = first.date.slice(5,7);
          const secondMonth = second.date.slice(5,7);
          const firstDay = first.date.slice(8,10);
          const secondDay = second.date.slice(8,10);

          if(firstYear > secondYear){
            return -1
          }
          else if (firstYear < secondYear){
            return 1;
          }
          else {
            if (firstMonth > secondMonth) { return -1 ;}
            else if (firstMonth < secondMonth) { return 1; }
            else {
              if (firstDay > secondDay) { return -1; }
              else { return 1; }
            }
          }
        });
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async addEntry(){
      if(!this.checkForm()){
        console.log("All forms need to be filled");
      }
      else{
        this.format();
        try{
          await axios.post("/api/entry", {
            date: this.date,
            miles: this.miles,
            gallons: this.gallons,
            cost: this.cost
          })
          this.date = "";
          this.miles = "";
          this.gallons = "";
          this.cost = "";
        } catch(error){
          console.log(error);
        }
        this.getEntries();
      }
    },
    format(){
      this.miles = parseFloat(this.miles).toFixed(1);
      this.gallons = parseFloat(this.gallons).toFixed(3);
      this.cost = parseFloat(this.cost).toFixed(2);
    },
    checkForm(){
      if (this.date === "" || this.miles === "" || this.gallons === "" || this.cost === ""){
        return false;
      }
      return true;
    }
  }


}
</script>

<style scoped>
input{
  width: 90%;
}

#stats{
  padding: 8px;
  text-align: center;
  background-color: #8cdbff;
  margin-left: 10px;
  border-radius: 5px;
  height: 180px;
}

</style>
