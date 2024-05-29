from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Task, Project
from .serializers import TaskSerializer, ProjectSerializer

class TaskListView(APIView):
    def get(self, request):
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TaskDetailView(APIView):
    def get_object(self, pk):
        try:
            return Task.objects.get(pk=pk)
        except Task.DoesNotExist:
            return None

    def get(self, request, pk):
        task = self.get_object(pk)
        if task is not None:
            serializer = TaskSerializer(task)
            return Response(serializer.data)
        return Response({"error": "Task not found"}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        task = self.get_object(pk)
        if task is not None:
            serializer = TaskSerializer(task, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({"error": "Task not found"}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        task = self.get_object(pk)
        if task is not None:
            task.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response({"error": "Task not found"}, status=status.HTTP_404_NOT_FOUND)

class ProjectListView(APIView):
    def get(self, request):
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ProjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProjectDetailView(APIView):
    def get_object(self, pk):
        try:
            return Project.objects.get(pk=pk)
        except Project.DoesNotExist:
            return None

    def get(self, request, pk):
        project = self.get_object(pk)
        if project is not None:
            serializer = ProjectSerializer(project)
            return Response(serializer.data)
        return Response({"error": "Project not found"}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        project = self.get_object(pk)
        if project is not None:
            serializer = ProjectSerializer(project, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({"error": "Project not found"}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        project = self.get_object(pk)
        if project is not None:
            project.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response({"error": "Project not found"}, status=status.HTTP_404_NOT_FOUND)
