<template>
  <div class="col-md-4">
    <!-- Search Widget -->
    <div class="card my-4 rounded">
      <h5 class="card-header text text-dark">Search</h5>
      <div class="card-body">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search for...">
          <span class="input-group-btn ml-1">
            <button class="btn btn-primary" type="button">
              <b-icon icon="search"></b-icon>
            </button>
          </span>
        </div>
      </div>
    </div>

    <!-- Categories Widget -->
    <div class="card my-4 rounded">
      <h5 class="card-header">Categories</h5>
      <div class="card-body">
        <div class="row">
          <div class="col-lg-6">
            <ul class="list-unstyled mb-0">
              <li>
                <a href="#">#Test Category</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Side Widget -->
    <div class="card my-4 rounded">
      <h5 class="card-header">Side Widget</h5>
      <div class="card-body">
        <div class="text text-dark font-weight-bold cursor">
          Setting
        </div>
      </div>
    </div>
  </div>
</template>