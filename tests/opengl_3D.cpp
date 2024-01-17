#include <p6/p6.h>
#include <cmath>
#include <glm/glm.hpp>
#include <glm/gtc/constants.hpp>
#include <vector>
#include "glm/ext/matrix_clip_space.hpp"
#include "glm/gtx/transform.hpp"

struct ShapeVertex {
    glm::vec3 position;
    glm::vec3 normal;
    glm::vec2 texCoords;
};

std::vector<ShapeVertex> sphere_vertices(float radius, size_t discLat, size_t discLong) // NOLINT(bugprone-easily-swappable-parameters, readability-inconsistent-declaration-parameter-name)
{
    const auto fDiscLat  = static_cast<float>(discLat);
    const auto fDiscLong = static_cast<float>(discLong);

    const float phi   = 2.f * glm::pi<float>() / fDiscLat;
    const float theta = glm::pi<float>() / fDiscLong;

    std::vector<ShapeVertex> data;

    // Construit l'ensemble des vertex
    for (size_t j = 0; j <= discLong; ++j)
    {
        const auto fj = static_cast<float>(j);

        const float cosTheta = std::cos(-glm::pi<float>() / 2.f + fj * theta);
        const float sinTheta = std::sin(-glm::pi<float>() / 2.f + fj * theta);

        for (size_t i = 0; i <= discLat; ++i)
        {
            const auto  fi = static_cast<float>(i);
            ShapeVertex vertex{};

            vertex.texCoords.x = fi / fDiscLat;
            vertex.texCoords.y = 1.f - fj / fDiscLong;

            vertex.normal.x = std::sin(fi * phi) * cosTheta;
            vertex.normal.z = std::cos(fi * phi) * cosTheta;
            vertex.normal.y = sinTheta;

            vertex.position = radius * vertex.normal + glm::vec3{0.f, 0.f, -5.f};

            data.push_back(vertex);
        }
    }

    std::vector<ShapeVertex> vertices{};
    // Construit les vertex finaux en regroupant les données en triangles :
    // Pour une longitude donnée, les deux triangles formant une face sont de la forme :
    // (i, i + 1, i + discLat + 1), (i, i + discLat + 1, i + discLat)
    // avec i sur la bande correspondant à la longitude
    for (size_t j = 0; j < discLong; ++j)
    {
        const size_t offset = j * (discLat + 1);
        for (size_t i = 0; i < discLat; ++i)
        {
            vertices.push_back(data[offset + i]);
            vertices.push_back(data[offset + (i + 1)]);
            vertices.push_back(data[offset + discLat + 1 + (i + 1)]);
            vertices.push_back(data[offset + i]);
            vertices.push_back(data[offset + discLat + 1 + (i + 1)]);
            vertices.push_back(data[offset + i + discLat + 1]);
        }
    }

    return vertices;
}

int main()
{
    auto ctx = p6::Context{{1280, 720, "TP OpenGL"}};
    ctx.maximize_window();

    // const std::vector<glimac::ShapeVertex> vertices = glimac::sphere_vertices(1.f, 36, 36);
    const std::vector<ShapeVertex> vertices = sphere_vertices(1.f, 36, 36);

    // Création d'un Vertex Buffer Object et d'un Vertex Array Object
    GLuint vbo, vao;

    // Allocation d'un Vertex Buffer Object:
    glGenBuffers(1, &vbo);

    // "vbo" devient le VBO courant sur la cible GL_ARRAY_BUFFER:
    glBindBuffer(GL_ARRAY_BUFFER, vbo);

    // Stockage des données du tableau vertices dans le vbo placé sur GL_ARRAY_BUFFER (c'est à dire "vbo" ici) :
    glBufferData(GL_ARRAY_BUFFER, static_cast<GLsizeiptr>(vertices.size() * 8 * sizeof(GLfloat)), vertices.data(), GL_STATIC_DRAW);

    // Plus de VBO sur la cible GL_ARRAY_BUFFER:
    glBindBuffer(GL_ARRAY_BUFFER, 0);

    // Allocation d'un Vertex Array Objet:
    glGenVertexArrays(1, &vao);

    // "vao" devient le VAO courant:
    glBindVertexArray(vao);

    // "vbo" devient le VBO courant sur la cible GL_ARRAY_BUFFER:
    glBindBuffer(GL_ARRAY_BUFFER, vbo);

    // Activation de l'attribut de vertex 0; nous l'interpretons comme la position
    glEnableVertexAttribArray(0 /* Incide attribut*/);
    // On spécifie le type de donnée de l'attribut position ainsi que la manière dont il est stocké dans le VBO
    glVertexAttribPointer(
        0 /* Indice attribut */,
        3 /* Nombre de composantes */,
        GL_FLOAT /* Type d'une composante */,
        GL_FALSE /* Pas de normalisation */,
        8 * sizeof(GLfloat) /* Taille en octet d'un vertex complet entre chaque attribut position */,
        0 /* OpenGL doit utiliser le VBO attaché à GL_ARRAY_BUFFER et commencer à l'offset 0 */
    );
    // Activation de l'attribut de vertex 0; nous l'interpretons comme la position
    glEnableVertexAttribArray(1 /* Incide attribut*/);
    // On spécifie le type de donnée de l'attribut position ainsi que la manière dont il est stocké dans le VBO
    glVertexAttribPointer(
        1 /* Indice attribut */,
        3 /* Nombre de composantes */,
        GL_FLOAT /* Type d'une composante */,
        GL_FALSE /* Pas de normalisation */,
        8 * sizeof(GLfloat) /* Taille en octet d'un vertex complet entre chaque attribut position */,
        (void*)(3 * sizeof(GLfloat)) /* OpenGL doit utiliser le VBO attaché à GL_ARRAY_BUFFER et commencer à l'offset 0 */
    );
    // Activation de l'attribut de vertex 0; nous l'interpretons comme la position
    glEnableVertexAttribArray(3 /* Incide attribut*/);
    // On spécifie le type de donnée de l'attribut position ainsi que la manière dont il est stocké dans le VBO
    glVertexAttribPointer(
        3 /* Indice attribut */,
        2 /* Nombre de composantes */,
        GL_FLOAT /* Type d'une composante */,
        GL_FALSE /* Pas de normalisation */,
        8 * sizeof(GLfloat) /* Taille en octet d'un vertex complet entre chaque attribut position */,
        (void*)(6 * sizeof(GLfloat)) /* OpenGL doit utiliser le VBO attaché à GL_ARRAY_BUFFER et commencer à l'offset 0 */
    );

    // Plus de VAO courant:
    glBindVertexArray(0);

    auto const shader = p6::load_shader("res/opengl_3D.vert", "res/opengl_3D.frag");

    int triangle_id = 0;

    static float fov = 70.f;

    // Boucle d'update
    ctx.update = [&]() {
        // const glm::mat4 ProjMatrix   = glm::ortho(-2.f, 2.f, -2.f, 2.f);                 // glm::perspective(glm::radians(70.f), ctx.aspect_ratio(), 0.1f, 100.f);
        const glm::mat4 ProjMatrix   = glm::perspective(glm::radians(fov), ctx.aspect_ratio(), 0.1f, 100.f);
        const glm::mat4 MVMatrix     = glm::translate(glm::mat4{1.f}, {0.f, 0.f, -5.f});
        const glm::mat4 NormalMatrix = glm::transpose(glm::inverse(MVMatrix));

        glEnable(GL_DEPTH_TEST);
        // glDepthFunc(GL_LESS);
        // glDepthFunc(GL_GREATER);
        // glEnable(GL_CULL_FACE);
        static float aa{1.f};
        static float offset{1.f};
        glClearColor(0.f, 0.f, 0.f, 1.f);
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
        // "vao" devient le VAO courant, OpenGL l'utilisera lors du dessin pour avoir des informations sur les sommets
        glBindVertexArray(vao);
        shader.use();
        shader.set("uMVPMatrix", ProjMatrix);
        shader.set("uMVMatrix", MVMatrix);
        shader.set("uNormalMatrix", NormalMatrix);
        shader.set("fade", aa);
        shader.set("offset", offset);

        shader.check_for_errors_before_rendering();
        // OpenGL doit dessiner des triangles en utilisant 3 sommets (donc un seul triangle)
        glDrawArrays(GL_TRIANGLES, 0 /* Pas d'offset au début du VBO */, static_cast<GLsizei>(vertices.size()));
        // glDrawArrays(GL_TRIANGLES, triangle_id * 3, 3);

        // Plus de VAO courant:
        glBindVertexArray(0);

        ImGui::Begin("window");
        ImGui::InputInt("Traignel", &triangle_id);
        ImGui::DragFloat("dsfsdf", &aa);
        ImGui::SliderFloat("offset", &offset, -10.f, 2.f);
        ImGui::SliderFloat("fov", &fov, 0.f, 150.f);
        ImGui::End();
    };

    ctx.start();

    glDeleteVertexArrays(1, &vao);
    glDeleteBuffers(1, &vbo);
    return 0;
}