<template>
<div class='admin'>
  <div class="heading">
    <h2>Edit/Delete an Entry</h2>
  </div>

  <div>
  <input type="month" v-model="searchDate">
  <button @click="search">Search</button>

  <table>
    <col style="width: 20%;">
    <col style="width: 20%;">
    <col style="width: 20%;">
    <col style="width: 20%;">
    <col style="width: 10%;">
    <col style="width: 10%;">
    <thead>
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Miles</th>
        <th scope="col">Gallons</th>
        <th scope="col">Cost</th>
      </tr>
    </thead>
    <tbody>
      <tr v-show="searchResults" v-for="entry in searchResults" :key="entry.id">
        <td>{{entry.date}}</td>
        <td>{{entry.miles}}</td>
        <td>{{entry.gallons}}</td>
        <td>${{entry.cost}}</td>
        <td class="button-cell"><button @click="editEntry(entry)">Edit</button></td>
        <td class="button-cell"><button @click="deleteEntry(entry)">Delete</button></td>
      </tr>
    </tbody>
  </table>

<p></p>
<div id='editing' v-show="editing">
  <h2>Editing entry for {{this.editingDate}}</h2>
  Miles: <input type="text" v-model="editMiles" placeholder="Miles">
  <p></p>
  Gallons: <input type="text" v-model="editGallons" placeholder="Gallons">
  <p></p>
  Cost: <input type="text" v-model="editCost" placeholder="Cost">
  <p></p>
  <button @click="saveEdit">Save</button>
</div>
</div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Manage',
  data() {
    return {
      entries: [],
      searchDate: "",
      searchResults: [],
      editing: false,
      editMiles: "",
      editGallons: "",
      editCost: "",
      entryEditing: null,
    }
  },
  computed: {
    editingDate(){
      if(this.entryEditing){
        return this.entryEditing.date;
      }
      return "";
    }
  },
  created() {
    this.getEntries();
  },
  methods: {
    search(){
      this.searchResults = [];
      this.entries.forEach(entry => {
        //console.log(entry.date.slice(0,7));
        if (entry.date.slice(0,7) == this.searchDate){
          this.searchResults.push(entry);
        }
      });
    },
    async getEntries() {
      try {
        let response = await axios.get("/api/entry");
        this.entries = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteEntry(entry) {
      try {
        await axios.delete("/api/entry/" + entry._id);
        this.getEntries();
        this.searchResults = [];
        this.searchDate = "";
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    editEntry(entry){
      this.entryEditing = entry;
      this.editing = true;
      this.editMiles = entry.miles;
      this.editGallons = entry.gallons;
      this.editCost = entry.cost;
      document.getElementById('editing').scrollIntoView();
    },
    async saveEdit() {
      try {
        this.format();
        await axios.put("/api/entries/" + this.entryEditing._id, {
          miles: this.editMiles,
          gallons: this.editGallons,
          cost: this.editCost,
        });
        this.entryEditing = null;
        this.editing = false;
        this.editMiles = "";
        this.editGallons = "";
        this.editCost = "";
        this.searchResults = [];
        this.getEntries();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    format(){
      this.editMiles = parseFloat(this.editMiles).toFixed(1);
      this.editGallons = parseFloat(this.editGallons).toFixed(3);
      this.editCost = parseFloat(this.editCost).toFixed(2);
    },
  }
}
</script>

<style scoped>
.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
  font-size: 20px;
}

.add,
.edit {
  display: flex;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center
}

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}

/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}

</style>
