<template>
  <main>
    <section class="mb-4">
      <h1>Getting started</h1>
      <p>
        An open-source PHP MVC framework for efficient web development. It offers an organized structure and extreme
        simplicity to create agile applications with ease.
      </p>
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
    </section>

    <section>
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

    <section>
      <h3>Creating a Controller</h3>
      <p>Example code for creating a controller in iMono, including a method to return the current date and time in JSON
        format.</p>
      <CodeHighlighter :code="exampleController" />
    </section>

    <section>
      <h3>Rendering Templates</h3>
      <p>Example code for rendering templates using a controller in iMono.</p>
      <CodeHighlighter :code="exampleControllerRender" />
    </section>

    <section>
      <h3>Creating Routes</h3>
      <p>Example code for creating a route pointing to a method of a controller.</p>
      <CodeHighlighter :code="exampleRoute" />
    </section>

    <section class="mt-4">
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
