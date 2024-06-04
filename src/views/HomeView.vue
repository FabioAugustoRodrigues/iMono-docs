<template>
  <main>
    <section class="content">
      <h1>Getting started</h1>
      <p class="text-muted">
        An open-source PHP MVC framework for efficient web development. It offers an organized structure and extreme
        simplicity to create agile applications with ease.
      </p>

      <div class="row mb-3">
        <div class="col-sm-12 col-md-3">
          <a href="https://github.com/FabioAugustoRodrigues/iMono" class="github-icon">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>

      <p>
        iMono is NOT a professional framework and does not include the extensive features found in more robust
        frameworks.
        If your needs are simple, such as displaying a few pages, making basic database queries, and implementing a bit
        of AJAX without diving into extensive documentation of complex frameworks, then iMono could be the ideal
        solution
        for you. iMono is extremely easy to install, works on almost any platform, and keeps things as straightforward
        as
        possible.
      </p>

      <div class="row mt-4">
        <div class="col-12">
          <h6>On this page</h6>
          <ul class="">
            <li><a href="#installation" class="text-decoration-none">Installation</a></li>
            <li><a href="#tutorial" class="text-decoration-none">Very quick tutorial</a></li>
            <li><a href="#next-steps" class="text-decoration-none">Next steps</a></li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content" id="installation">
      <h3>Installation</h3>
      <p>To get started with iMono, follow these simple steps:</p>
      <ol>
        <li>
          Ensure you have Composer installed on your system. (if you don't have, you can download <a
            href="https://getcomposer.org/">here</a>)
        </li>
        <li>
          Run the following command in your project to install dependencies:
          <br />
          <code>composer create-project i-mono/i-mono</code>
        </li>
      </ol>
    </section>

    <section class="content" id="tutorial">
      <div class="sub-content">
        <h3>Very quick tutorial</h3>
      </div>

      <div class="sub-content">
        <h5>Creating a Controller</h5>
        <p>Example code for creating a controller in iMono, including a method to return the current date and time in
          JSON
          format.</p>
        <CodeHighlighter :code="exampleController" />
      </div>

      <div class="sub-content">
        <h5>Rendering Templates</h5>
        <p>Example code for rendering templates using a controller in iMono.</p>
        <CodeHighlighter :code="exampleControllerRender" />
      </div>

      <div class="sub-content">
        <h5>Creating Routes</h5>
        <p>Example code for creating a route pointing to a method of a controller.</p>
        <CodeHighlighter :code="exampleRoute" />
      </div>
    </section>

    <section class="content" id="next-steps">
      <p>
        In the next steps it will be described how to use the controllers, routes and all iMono features
      </p>

      <div class="row mt-4">
        <div class="col-sm-12 col-md-3">
          <RouterLink to="/controllers" class="btn btn-theme w-100">
            Next step
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import CodeHighlighter from '../components/CodeHighlighter.vue';

const exampleController = `class ExampleController extends ControllerAbstract
{
    public function getCurrentDateTime() {
        return $this->respondJson(
            [
                "data" => [
                    "current_date_time" => date('Y-m-d H:i:s')
                ],
                "message" => ""
            ],
            200
        );
    }
}
`;

const exampleControllerRender = `class ExampleController extends ControllerAbstract
{
    public function index() {
        $this->view('index');
    }
}
`;

const exampleRoute = `Router::post("/api/getCurrentDateTime", ExampleController::class, "getCurrentDateTime");`
</script>
