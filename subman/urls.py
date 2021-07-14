"""subman URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
import debug_toolbar
from playground import views as playgroundViews
from subscription import views as subscriptionViews
from rest_framework.authtoken import views as authViews
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'subscription', subscriptionViews.SubscriptionView, 'subscription')
router.register(r'playground', playgroundViews.PlaygroundView, 'playground')
router.register(r'users', subscriptionViews.UserViewSet)
router.register(r'groups',subscriptionViews.GroupViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('playground/', include('playground.urls')),
    path('subscription/', include('subscription.urls')),
    path('__debug__/', include(debug_toolbar.urls)),
    path('api/', include(router.urls)),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api-token-auth/', authViews.obtain_auth_token),
    path('dj-rest-auth/', include('dj_rest_auth.urls'))
]
