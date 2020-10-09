from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
from django.contrib.auth import get_user_model
User = get_user_model()


class SignupView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data

        name = data['name']
        email = data['email']
        password = data['password']
        password2 = data['password2']

        if password == password2:
            if User.objects.filter(email=email.exist()):
                return Response({'error': 'Email already in use.'})
            else:
                if len(password) < 6:
                    return Response({'error': 'Password must be at least 6 character in length'})
                else:
                    User = User.objects.create_user(
                        email=email, password=password, name=name)

                    User.save()

                    return Response({'success': 'User created successfully'})

        else:
            return Response({'error': 'Passwords does not match'})
